import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout } from '@components'

export const Workshops: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Workshops',
            description: '',
        }}
    >
        <GatedResourceLayout
            title="Sourcegraph Workshops"
            formLabel="Sign up for a workshop"
            form={{
                formId: '3f61adb5-bcdc-4511-83cb-9be6a2e7a947',
            }}
            description={
                <section className="col-md-6 col-12 pr-lg-6">
                    <h3 className="font-weight-normal pb-5">
                        Candy canes pastry chocolate bar chupa chups sweet.
                    </h3>
                    <p>Candy canes pastry chocolate bar chupa chups sweet. Sweet roll biscuit marshmallow donut bear claw cake cake jelly. Gingerbread cotton candy topping liquorice pudding croissant. Brownie gummies croissant tiramisu icing sesame snaps.</p>
                    <p>Carrot cake cake cupcake caramels apple pie. Sugar plum bear claw candy canes gummies chupa chups pastry lollipop. Pie oat cake bear claw bear claw jelly shortbread jujubes brownie.</p>
                    <p>Tart donut biscuit gummies bonbon sweet caramels. Pastry danish cotton candy topping lemon drops croissant gummi bears. Cake soufflé dessert topping caramels sesame snaps. Bonbon candy canes cake oat cake chocolate cake.</p>
                </section>
            }
        />
    </Layout>
)

export default Workshops
