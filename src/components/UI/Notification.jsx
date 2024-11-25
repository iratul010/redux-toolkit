import PropTypes from "prop-types";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
 console.log(cssClasses)
  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
Notification.propTypes = {
  status: PropTypes.oneOf(["success", "error","pending"]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default Notification;
