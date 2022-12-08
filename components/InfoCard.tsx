import { NextPage } from "next";
import { Button, Card, Text, Col, Row } from "@nextui-org/react";
interface Props {
    title: string;
    label: string;
    imageUrl: string;
    studentCount: string;
}
const InfoCard: NextPage<Props> = (prop) => {
    const { title, label, imageUrl, studentCount } = prop;
    return (
        <Card>
            <Card.Header css={{ position: "absolute", top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        {label}
                    </Text>
                    <Text h4 color="white">{title}</Text>
                </Col>
            </Card.Header>
            <Card.Image src={imageUrl}></Card.Image>
            <Card.Footer
                isBlurred
                css={
                    {
                        position: "absolute",
                        bgBlur: "#0111466",
                        bottom: 0
                    }
                }>
                <Row>
                    <Col>
                        <Text color="#d1d1d1" size={18}>
                            {studentCount} Students
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button flat auto rounded color={"primary"}>
                                <Text
                                    css={{ color: "inherit" }}
                                    size= {12}
                                    weight="bold"
                                >Enrol in Course</Text>
                            </Button>
                        </Row>
                    </Col>

                </Row>

                

            </Card.Footer>
        </Card>
    )
}
export default InfoCard;