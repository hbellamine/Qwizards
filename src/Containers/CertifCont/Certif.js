import React, {PureComponent} from 'react';
import jsPDF from 'jspdf'



const PDF = (props) => {

    const jsPdfGenerator =()=> {

        let doc = new jsPDF('p','pt');


        doc.text(20,20,'This is default text')

        doc.setFont('courier');
        doc.addImage(imgData, 'PNG', 15, 40, 180, 160);


        doc.text(20,30,'This is text with courier font')

        doc.save("generated.pdf")

    }

    return(
        <button onClick={jsPdfGenerator}>Generate PDF</button>
    )
}

export default PDF