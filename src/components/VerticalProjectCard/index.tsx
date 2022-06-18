import Image from 'next/image';
import { Box, Description, ProjectImageWrapper } from './styles';
interface VerticalProjectCardProps {
  // title: string;
  // description: string;
  image: string;
  // techStack: string[];
  // link: string;
}
export const VerticalProjectCard = ({
  // title,
  // description,
  image,
}: // techStack,
// link,
VerticalProjectCardProps) => {
  return (
    <>
      <Box>
        <ProjectImageWrapper>
          <Image
            src={image}
            width={529}
            height={444.95}
            alt='A picture of Simple Juris project in a tablet and in a MacBook'
          ></Image>
        </ProjectImageWrapper>
        <Description>
          <h2>Simple Juris</h2>
        </Description>
      </Box>
    </>
  );
};
