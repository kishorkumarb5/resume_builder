<<<<<<< HEAD
export var HEADING_TEXT = {backgroundColor: 'green'};
export const ROW_HEADER = "row row-header-template1 headingText-template1";
export const ROW_CONTENT = "row row-content-template1 ml-3";
=======
export const ROW_HEADER = "row row-header headingText";
export const ROW_CONTENT = "row row-content ml-3";
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8

function displayHeader(icon, HeadingName) {
  return (
  <div className={ROW_HEADER}>
    <h4><b className={"fa " + icon + " fa-lg"}></b>  <b>{HeadingName}</b></h4>
  </div>);
}



export default displayHeader;