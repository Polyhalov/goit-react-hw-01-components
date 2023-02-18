import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transhistory}>
  <thead>
    <tr>
      <th className={css.tableItem}>Type</th>
      <th className={css.tableItem}>Amount</th>
      <th className={css.tableItem}>Currency</th>
    </tr>
  </thead>

  <tbody >
          {items.map(({ id, type, amount, currency }) => (
            <tr  key={id}>
              <td className={css.tablewindow}>{type}</td>
              <td className={css.tablewindow}>{amount}</td>
              <td className={css.tablewindow}>{currency}</td>
            </tr>
          ))}
        </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};