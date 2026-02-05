
import {getCustomerById} from '../../../../../lib/data/customers';
import {getJobByPI} from '../../../../../lib/data/jobs';
// import Stripe from 'stripe';
import ServiceSuccessClient from '@/app/components/ServiceSuccessClient';
import {getServiceId} from '../../../../../lib/data/job-service';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Page({searchParams}){



const filters = await searchParams;


const pi = filters.payment_intent;


// const job = await getJobByPI(pi);

// const serviceId = getServiceId(job.id)

// console.log('hhdkdkdkjdlf', serviceId);

// const customer = await getCustomerById(job.customer_id);

// console.log(customer);


    return (
        <>
        {/* <ServiceSuccessClient job={job} customer={customer} pi={pi}/> */}
        <ServiceSuccessClient  pi={pi}/>
        </>
    )
}