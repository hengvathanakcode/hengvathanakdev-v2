import React from 'react';
import Allhighlightvolunteer from './Allhighlightvolunteer.js';
import apiv from "../../../../db/highlight/volunteer/data.js";

function Highlightcard() {
  return (
    <>
       {apiv.map((highlight, index) => (
                <div key={(index + 1).toString()}>
                    <Allhighlightvolunteer
                        key={(index + 1).toString()}
                        logo={highlight().logo}
                        date={highlight().date}
                        program={highlight().program}
                        title={highlight().title}
                        position={highlight().position}
                        link={"/volunteering/" + (index + 1)}
                        demo={highlight().demo}
                    />
                </div>
            ))}
    </>
  )
}

export default Highlightcard
