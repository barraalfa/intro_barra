import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function EditProfile() {
    return (
        <div className="EditProfile" style={{ width: 300, height: 100 }}>
            <ButtonGroup vertical>
            <Button className="buttonedit txt-light bg-dark border-dark" style={{width:300, height:50}}>Edit public profile and URL</Button>
            <Button className="buttonaddprof txt-light bg-dark border-dark" style={{width:300, height:50}}>Add profile in another language</Button>
            </ButtonGroup>
        </div>
    );
}
export default EditProfile;