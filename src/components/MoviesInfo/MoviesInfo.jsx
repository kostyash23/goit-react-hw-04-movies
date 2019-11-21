import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { craditsInfo, reviewsInfo, MoviesId } from '../../helper/fetch';
import MoviesPage from './MoviesPage';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import styles from './MoviesInfo.module.css';

export default class MoviesInfo extends Component {
  state = {
    credits: [],
    reviews: [],
    movie: null,
  };

  getIdFromProps = props => props.match.params.id;

  componentDidMount() {
    MoviesId(this.props.match.params.id)
      .then(alldata => alldata.data)
      .then(movie => this.setState({ movie }));

    craditsInfo(this.props.match.params.id)
      .then(alldata => alldata.data)
      .then(data => data.cast)
      .then(credits => this.setState({ credits }));

    reviewsInfo(this.props.match.params.id)
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(reviews => this.setState({ reviews }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/movies');
  };

  render() {
    const { credits, reviews, movie } = this.state;
    const { match } = this.props;
    const RendCast = props => <Cast {...props} credits={credits} />;

    const RendReview = props => <Review {...props} reviews={reviews} />;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          go back!
        </button>
        <MoviesPage {...movie} />
        <div className={styles.moreInfo}>
          <h3>Additional information </h3>
          <Link
            className={styles.link}
            to={{
              pathname: `/movies/${match.params.id}/cast`,
              state: { from: this.props.location },
            }}
          >
            Cast
          </Link>

          <Link
            to={{
              pathname: `/movies/${match.params.id}/review`,
              state: { from: this.props.location },
            }}
          >
            Review
          </Link>
          <Route path="/movies/:id/cast" component={RendCast} />
          <Route path="/movies/:id/review" component={RendReview} />
        </div>
      </div>
    );
  }
}
