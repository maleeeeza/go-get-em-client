import React from 'react';
import { connect } from 'react-redux';
import { fetchCat } from '../actions/catAction';

export class AdoptAPet extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(fetchCat()),
    ]);
  }

  generatePetArticle({ imageURL, name }) {
    return (
      <article>
        <header>
          <h2 data-prop="name">{name}</h2>
          <img src={imageURL} alt="" />
        </header>

      </article>
    );
  }

  render() {
    const { catToAdopt } = this.props;
    const [catArticle] = [
      this.generatePetArticle(catToAdopt),
    ];

    return (
      <div className="animals">
        {catArticle}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
});

export default connect(mapStateToProps)(AdoptAPet);
