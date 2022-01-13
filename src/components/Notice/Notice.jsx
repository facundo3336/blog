import "./Notice.scss";

export const Notice = ({ message, close }) => {
  return (
    <div className="noticeContainer">
      <i onClick={close} className="far fa-times-circle"></i>
      <span>{message}</span>
    </div>
  );
};
