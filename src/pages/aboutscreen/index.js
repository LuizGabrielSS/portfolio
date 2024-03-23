import React from 'react'
import { Box, Card, Typography } from '@mui/material'

import ContainerComponent from '../../components/containercomponent'
import Translator from '../../components/trasnlatecomponent'

import ShowMoreFunction from './components/showmore'
import ProfessionalFunction from './components/professional'
import SoftSkillFunction from './components/softskill'
import HardSkillFunction from './components/hardskill'
import SchoolFunction from './components/school'
import CertificatesFunction from './components/certificate'

export default function AboutScreen(){

    return(
        <ContainerComponent>
            <ShowMoreFunction
                Nome={<Translator
                    path="about.resume.title"
                />}
            >
                <Box
                flexWrap= "wrap"
                p={1}
                >
                    <Card>
                        <Typography paragraph>
                            <Translator
                                path="about.resume.resume"
                            />
                        </Typography>
                    </Card>
                </Box>
            </ShowMoreFunction>
            <ShowMoreFunction
                Nome={<Translator
                    path="about.school.academic.title"
                />}
            >
                <SchoolFunction/>
            </ShowMoreFunction>
            <ShowMoreFunction
                Nome={<Translator
                    path="about.school.certificate.title"
                />}
            >
                <CertificatesFunction/>
            </ShowMoreFunction>
            <ShowMoreFunction
                Nome={<Translator
                    path="about.abilities.title"
                />}
            >
                <>
                <ShowMoreFunction
                    Nome={<Translator
                        path="about.abilities.hardskill.title"
                    />}
                >
                    <HardSkillFunction/>
                </ShowMoreFunction>
                <ShowMoreFunction
                    Nome={<Translator
                        path="about.abilities.softskill.title"
                    />}
                >
                    <SoftSkillFunction/>
                </ShowMoreFunction>
                </>
            </ShowMoreFunction>
            <ShowMoreFunction
                Nome={<Translator
                    path="about.experience.title"
                />}
            >
                <>
                    <ShowMoreFunction
                        Nome={<Translator
                            path="about.experience.profissional.title"
                        />}
                    >
                        <ProfessionalFunction/>
                    </ShowMoreFunction>
                    <ShowMoreFunction
                        Nome={<Translator
                            path="about.experience.personal.title"
                        />}
                    >
                        <ShowMoreFunction
                            Nome={<Translator
                                path="about.experience.personal.intership.title"
                            />}
                        >
                            <Box
                            flexWrap= "wrap"
                            p={1}
                            >
                                <Card>
                                    <Typography>
                                        <Translator
                                            path="about.experience.personal.intership.descrption"
                                        />
                                    </Typography>
                                </Card>
                            </Box>
                        </ShowMoreFunction>
                    </ShowMoreFunction>
                </>
            </ShowMoreFunction>
        </ContainerComponent>
    )

}