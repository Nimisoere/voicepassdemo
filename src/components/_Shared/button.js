import React from "react";
import { Button } from "reactstrap";
import { Spinner } from "../_Shared";

export const VPButton = ({ visible, inProcess, type, canSubmit, title }) => (
  <div>
    {visible ? (
      <Button
        block
        type={type || "submit"}
        disabled={!canSubmit || inProcess}
        className="orange-submit"
      >
        {!inProcess ? (
          <span>
            <span>{title}</span>{" "}
          </span>
        ) : (
          <span>
            <Spinner />
          </span>
        )}
      </Button>
    ) : (
      ""
    )}
  </div>
);
