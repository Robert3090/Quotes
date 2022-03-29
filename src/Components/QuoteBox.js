import React from "react";
import "./QuoteBox.css"

function QuoteBox ({quote}) {

    return (
        <div className="box">
            <div>
                <p className="phrase">{quote.quote}</p>
            </div>
            <p className="author">{quote.author}</p>
        </div>
    )
}

export default QuoteBox