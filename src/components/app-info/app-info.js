import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників в компанії Apple</h1>
      <h2>Загальна кількість співробітників: {employees}</h2>
      <h2>Премію отримують: {increased}</h2>
    </div>
  );
};

export default AppInfo;
