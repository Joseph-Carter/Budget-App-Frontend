const API = import.meta.env.VITE_BASE_URL;

const Transaction = ({ transaction, index }) => {
  return (
    <tr className="transaction">
      <td className="date">
        {transaction.date ? (
          <span>{transaction.date}</span>
        ) : (
          "purchase date is pending"
        )}
      </td>
      <td className="item" style={{ cursor: "alias" }}>
        <a href={`/transactions/${index}`}>{transaction.itemName}</a>
      </td>
      <td className="amount">
        {transaction.spent ? (
          <span>{`- ${transaction.amount}`}</span>
        ) : (
          <span>{`+ ${transaction.amount}`}</span>
        )}
      </td>
    </tr>
  );
};

export default Transaction;
