import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {defaultImage} from "../../utility/utility";
import style from "./WeaponCard.module.css"
import {NavLink} from "react-router-dom";

const WeaponCard = ({ name, imageName, category }) => {
    return (
        <Card style={{ width: '14rem' }} className="mb-3">
            <NavLink to={`/weapon/${name}`}>
                <CardImg className={style.image} onError={(event) => defaultImage(event)} loading="lazy" src={`https://cdn.warframestat.us/img/${imageName}`} />
            </NavLink>
            <CardBody className="text-center">
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>
                    {category}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default WeaponCard;