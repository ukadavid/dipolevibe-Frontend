import { CameraIcon, PencilIcon, LockOpenIcon,  GlobeAltIcon,  ChartBarIcon } from '@heroicons/react/20/solid'
import VideoIcon from "../../assets/video-recorder.png";
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Screen and Video Recording',
    description:
      'Take your recordings to the next level by seamlessly integrating video capture. Enhance your content with dynamic visuals.',
    icon: CameraIcon,
  },
  {
    name: 'Transcription',
    description: 'Transform audio and video into text with our accurate transcription services. Make your content accessible to a wider audience.',
    icon: PencilIcon,
  },
  {
    name: 'Collaboration Workspace',
    description: 'Foster teamwork and creativity with our collaborative workspaces. Share ideas, review content, and streamline your projects.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Public and Private Publishing',
    description: 'Share your content with the world or with your network. Publish recordings publicly to engage a wider audience or smaller group.',
    icon: LockOpenIcon,
  },
  {
    name: 'Engagement Insights',
    description: 'Gain valuable insights into viewer behavior and engagement. Understand what resonates with your audience.',
    icon: ChartBarIcon,
  },
]


export default function Feature() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="overflow-hidden dark:bg-gray-800 bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Features</p>
              <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
                Your all-in-one solution for seamless video and screen recording, accurate transcription, and collaborative workspaces. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    ref={ref}
                    className="relative pl-9"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ delay: index * 1, duration: 1 }}
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={VideoIcon}
            alt="Recording screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}