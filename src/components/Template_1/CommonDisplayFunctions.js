export const ROW_HEADER = "row row-header headingText";
export const ROW_CONTENT = "row row-content ml-3";

function displayHeader(icon, HeadingName) {
  return (
  <div className={ROW_HEADER}>
    <h4><b className={"fa " + icon + " fa-lg"}></b>  <b>{HeadingName}</b></h4>
  </div>);
}



export default displayHeader;