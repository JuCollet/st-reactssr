import React, { PureComponent } from 'react';
import axios from 'axios';

class ExpensesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expensesList: [],
    };
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      this.setState({
        expensesList: res.data,
      });
    });
  }

  renderExpensesList() {
    function randomPrice(max = 1000) {
      return Math.round(((Math.random() * max) + 1) * 100) / 100;
    }
    if (this.state.expensesList.length === 0) return null;
    return this.state.expensesList.map((el, i) => (
      <li
        key={el.id}
        className={`expenseslist-el ${i % 2 === 0 ? 'expenseslist-el-odd' : ''}`}
      >
        <span className="expenseslist-el-userId">{el.userId}x</span>
        <span className="expenseslist-el-description">{el.title}</span>
        <span className="expenseslist-el-price">{`${randomPrice()}€`}</span>
      </li>
    ));
  }

  render() {
    return (
      <div className="card card-lg">
        <span className="card-title">Liste des dépenses</span>
        <div className="expenseslist-wrapper">
          <ul className="expenseslist">
            {this.renderExpensesList()}
          </ul>
        </div>
        <span className="card-link">Tableau détaillé</span>
        <style global jsx>{`
          .expenseslist-wrapper {
            position: absolute;
            padding-right: 17px;
            left: 0px;
            right: 0px;
            top: 60px;
            bottom: 45px;
            width: calc(100% + 17px);
            overflow-y: scroll;
          }

          .expenseslist {
            padding: 0;
            margin: 0;
            list-style: none;
            font-family: Roboto, sans-serif;
            color: #546275;
          }

          .expenseslist-el {
            display: flex;
            align-items: center;
            padding: 10px 5px 10px 25px;
            background-color: #FEFEFE;
          }

          .expenseslist-el-odd {
            background-color: #F2F2F2;
          }

          .expenseslist-el-userId {
            display: inline-block;
            width: 5%;
            margin-right: 5%;
          }

          .expenseslist-el-description {
            display: inline-block;
            width: 65%;
            margin-right: 5%;
          }

          .expenseslist-el-price {
            display: inline-block;
            width: 20%;
            font-weight: bold;
          }
        `}
        </style>
      </div>
    );
  }
}

export default ExpensesList;
