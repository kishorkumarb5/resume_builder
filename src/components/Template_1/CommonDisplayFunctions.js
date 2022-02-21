export var HEADING_TEXT = {backgroundColor: 'green'};
export const ROW_HEADER = "row row-header-template1 headingText-template1";
export const ROW_CONTENT = "row row-content-template1 ml-3";

function displayHeader(icon, HeadingName) {
  return (
  <div className={ROW_HEADER}>
    <h4><b className={"fa " + icon + " fa-lg"}></b>  <b>{HeadingName}</b></h4>
  </div>);
}



export default displayHeader;