import Image from 'next/image'
import { useRouter } from 'next/router'
import template from '../../template/Repair'


import Slide from '@/components/slide'

export default function form() {
    // const router = useRouter()

    // console.log(template);
    // console.log("router.query: ", router.query.form);

    return (
        <pre>
            {
                JSON.stringify(template, null, 2)
            }
        </pre>
    )
}












// params = get();
// import template from `/template/${params
// }.json`

// template/temp1.json
// template/temp2.json
// template/temp3.json

// import * as tmp from './templates'

// tmp.`${params
// }`

