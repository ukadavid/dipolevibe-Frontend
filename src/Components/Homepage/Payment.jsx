import { useState } from 'react';
import { plans } from '../../Data/data';

const PlansComponent = () => {
  const [billPlan, setBillPlan] = useState('monthly');

  const handleBillButtonClick = () => {
    setBillPlan(prevPlan => (prevPlan === 'monthly' ? 'annually' : 'monthly'));
  };

  return (
    <main className=" bg-gray-50 py-8 dark:bg-gray-800">
      <div className="text-center ">
        <h1 className="mb-4 text-2xl font-normal text-white md:text-3xl lg:text-4xl">
          Our <span className="font-semibold">plans</span> for your{' '}
          <span className="font-semibold">recordings</span>
        </h1>
        <p className="text-sm font-normal text-gray-400">
        Explore our three primary plans tailored for individuals, businesses, startups, and agencies.
        </p>
        <p className="text-sm font-normal text-gray-400">
        Embark on a journey of self-improvement and discover what truly resonates with you. Record, transcribe, and engage with your content effortlessly.
        </p>
      </div>

      <div className="flex items-center justify-center mt-10 space-x-4">
        <span className="text-base text-white font-medium">Bill Monthly</span>
        <button
          className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleBillButtonClick}
        >
          <div className="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none"></div>
          <div
            className="absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"
            style={{ transform: `translateX(${billPlan === 'monthly' ? '0' : '33'}px)` }}
          ></div>
        </button>
        <span className="text-base text-white font-medium">Bill Annually</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
        {plans.map((plan, i) => (
          <section key={i} className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span
                className={`text-4xl font-medium tracking-tight ${
                  plan.name === 'Basic' ? 'text-green-500' : ''
                }`}
              >
                {`${billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}`}
              </span>
              <span className="text-gray-400">{billPlan === 'monthly' ? '/month' : '/year'}</span>
            </div>
            <div className="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 className="text-2xl font-normal">{plan.name}</h2>
              <p className="text-sm text-gray-400">{plan.description}</p>
            </div>
            <ul className="flex-1 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex-shrink-0 pt-4">
              <button
                className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.name === 'Basic' ? 'bg-indigo-500 text-white hover:bg-indigo-700' : 'hover:bg-indigo-500 hover:text-white'
                }`}
              >
                {`Get ${plan.name}`}
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default PlansComponent;
