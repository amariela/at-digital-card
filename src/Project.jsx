import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import projectsData from "./components/projects.json";
import { containerVariants, itemVariants } from "./components/Animations";

export default function Project() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container className="pb-5">
                <motion.h1 variants={itemVariants} id="titleName" className="pb-4">
                    Featured Projects.
                </motion.h1>
                <Row className="justify-content-center g-5">
                    {projectsData.projects.map((project, index) => (
                        <Col key={index} xs={12} md={10} lg={6} className="d-flex align-items-stretch">
                            <motion.div variants={itemVariants}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Img 
                                        variant="top" 
                                        src={project.image} 
                                        alt={project.title}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="fs-2 fw-bold">{project.title}</Card.Title>
                                        <Card.Subtitle className="mb-3 fw-bold">
                                            {project.subtitle}
                                        </Card.Subtitle>
                                        <Card.Text className="fw-normal text-muted fs-6">{project.description}</Card.Text>
                                        <div className="mt-auto pt-2">
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-dark me-2 my-1 fw-bold"
                                            >
                                                <i className="bi bi-github me-2 h5"></i>
                                                <span className="align-middle">Code</span>
                                            </a>
                                            {project.demo && (
                                                <a 
                                                    href={project.demo} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="btn btn-outline-dark me-2 my-1 fw-bold"
                                                >
                                                    <i className="bi bi-display me-2 h5"></i>
                                                    <span className="align-middle">Demo</span>
                                                </a>
                                            )}
                                            {project.linkedin && (
                                                <a 
                                                    href={project.linkedin} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="btn btn-outline-dark me-2 my-1 fw-bold"
                                                >
                                                    <i className="bi bi-linkedin me-2 h5"></i>
                                                    <span className="align-middle">Video</span>
                                                </a>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
}
