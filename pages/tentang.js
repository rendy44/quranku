import Layout from '../components/global/Layout';
import Section from '../components/global/Section';

export default function Tentang() {
    return (
        <Layout title='Tentang'>
            <Section isFull={true} noHero={true}>
                <article>
                    <p>Bimsillah</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum at mauris in varius. Curabitur rhoncus nisi at tortor pulvinar, sit amet fermentum leo malesuada. Ut ac tincidunt lorem, accumsan facilisis nibh. Mauris id eros ac lectus imperdiet sodales.</p>
                    <p>Duis hendrerit, tortor eget pretium condimentum, metus neque tincidunt turpis, sit amet malesuada arcu massa eget metus. Suspendisse volutpat quis purus vel tempus. Quisque congue at dui non finibus. In velit lacus, posuere malesuada diam eget, blandit bibendum leo.<br />
                    Maecenas finibus vehicula lacus ac ullamcorper. Ut maximus nisi libero, eu lobortis arcu blandit eu. Integer at risus molestie, rutrum mauris sed, aliquam turpis.</p>
                    <p>Sed ut diam vulputate, euismod lorem quis, commodo elit. Suspendisse vehicula pharetra metus cursus tempus. Cras ac justo eget mauris mattis scelerisque. Nullam at nisl in dui ullamcorper sodales. Ut et nisl orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. In dapibus tempus libero eu suscipit. Fusce porta fermentum tortor, vel ultricies lorem. Aliquam sit amet sem consectetur, dictum turpis ut, laoreet risus. Vivamus ullamcorper urna non nulla pellentesque placerat. Sed suscipit tempus pretium. Donec cursus turpis bibendum, pretium arcu posuere, volutpat neque.</p>
                    <p>Donec mattis nunc turpis, in fringilla metus varius elementum. Aliquam ac diam ac odio sagittis sodales quis at tellus. Proin scelerisque erat nisi. Mauris semper vitae odio in accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eget eros ut nisi aliquet tristique. Curabitur non leo eu mi mattis pretium at at metus. Praesent eget finibus massa, vel molestie tellus. Morbi eu ultricies lorem, ut sodales elit. Integer eu dolor nisi. In feugiat erat arcu, non aliquet orci suscipit sit amet. Integer facilisis ultrices nisi ac semper. Aenean tempus aliquam lectus, a scelerisque justo convallis sit amet. Nulla posuere orci a mi rhoncus semper. Cras justo lorem, pulvinar non felis a, consequat ultrices sem.</p>
                </article>
            </Section>
        </Layout>
    )
}