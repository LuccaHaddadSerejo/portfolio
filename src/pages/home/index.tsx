// Styles
import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Button } from '@/styles/Buttons';

// Components
import { Stack } from '@/components/Stack';
import { Project } from '@/components/Project';

// Data
import { stackData } from '@/utils/stackData';
import { userData } from '@/utils/userData';

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMeSection,
  AboutMeContent,
} from './style';

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as='h1' type='heading1' color='grey5'>
              Criando experiências por meio da tecnologia{' '}
            </Text>
            <Text type='body1' color='grey5'>
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades.
            </Text>
            <HeaderButtonsArea>
              <Button as='a' href='#projetos'>
                Projetos
              </Button>
              <Button as='a' href='#tecnologias' type='btLink' color='grey5'>
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id='tecnologias'>
        <Container>
          <Text as='h4' type='heading3' color='grey1'>
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <AboutMeSection>
        <Container>
          <AboutMeContent>
            <Text as='h1' type='heading1' color='grey5'>
              Sobre mim
            </Text>
            <Text type='body1' color='grey5'>
              Meu nome é Lucca Haddad Serejo, tenho 24 anos e moro em
              Brasília-DF. Comecei na programação e na área da tecnologia após
              alguns anos estudando Direito.
            </Text>
            <Text type='body1' color='grey5'>
              Estudo programação a pouco menos de um ano, tive experiência
              trabalhando na área tech como monitor de ensino na Kenzie Academy
              Brasil.
            </Text>
            <Text type='body1' color='grey5'>
              Atualmente estou finalizando meus estudos no curso de
              Desenvolvedor Web Full-Stack na Kenzie e me formando na faculdade
              de Análise e Desenvolvimento de Sistemas, sempre em busca de
              melhorar minhas hard e soft skills.
            </Text>
          </AboutMeContent>
        </Container>
      </AboutMeSection>
      <ProjectsArea id='projetos'>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as='h2' type='heading4' color='grey1'>
                Vamos trocar uma ideia?
              </Text>
              <Text as='p' type='body1' color='grey2'>
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá.
              </Text>
              <Button
                type='primary'
                target='_blank'
                as='a'
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}>
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text
                as='h2'
                type='heading4'
                color='grey1'
                css={{ marginBottom: '$2' }}>
                Projetos
              </Text>
              <Text as='h3' type='heading2' color='grey1'>
                <Text as='span' color='brand1' type='heading2'>
                  Dedicação
                </Text>{' '}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
