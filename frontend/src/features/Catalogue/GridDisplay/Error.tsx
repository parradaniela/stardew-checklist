import Section from '../../../design-system/Section'

type Props = {
    error: unknown;
}

const Error = ({ error }: Props) => {
    return (
        <Section>
            <p>{`An error has occurred: ${error}`}</p>
        </Section>
    )
}

export default Error