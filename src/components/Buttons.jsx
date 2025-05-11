
import { Fragment } from "react";

export default function IconButtons({children, action ,tw = ''}){
    return (
        <Fragment>
      <button onClick={action} className={`${tw}`} >{children}</button>
        </Fragment>
    )
}