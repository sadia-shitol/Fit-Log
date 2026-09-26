import Container from '@/app/components/Container'
import CTAButtons from '@/app/components/CTAButtons'
import { Workout } from '@/app/types/workouts.type'
import Image from 'next/image'
interface IExerciseDetailsPageProps {
  params: Promise<{
    id: string
  }>
}
const getWorkouts = async () => {
  const response = await fetch('https://api.api-store.workers.dev/api/fitlog')
  const data = await response.json()
  return data
}
const ExerciseDetailsPage = async ({ params }: IExerciseDetailsPageProps) => {
  const { id } = await params
  const exerciseData = await getWorkouts()
  const exercise = exerciseData.find(
    (exercise: Workout) => exercise.id === Number(id)
  )
  return (
    <Container>
      <section className='p-8 grid grid-cols-1 gap-8 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:items-stretch'>
        <div className='relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:aspect-auto border border-gray-800'>
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className='object-cover '
          />
        </div>

        <div>
          {/* Title */}
          <h1 className='text-4xl font-black uppercase tracking-tight text-white'>
            {exercise.name}
          </h1>

          {/* Description */}
          <p className='mt-3 text-sm leading-6 text-gray-400'>
            {exercise.description}
          </p>

          {/* Muscle Groups */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className='rounded-full bg-[#c2f800] px-3 py-1 text-xs font-bold uppercase text-black'
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className='mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#15171d]'>
            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>EQUIPMENT</span>
              <span className='text-white'>{exercise.equipment}</span>
            </div>

            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>DIFFICULTY</span>
              <span className='text-white'>{exercise.difficulty}</span>
            </div>

            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>SETS</span>
              <span className='text-white'>{exercise.sets}</span>
            </div>

            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>REPS</span>
              <span className='text-white'>{exercise.reps}</span>
            </div>

            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>DURATION</span>
              <span className='text-white'>{exercise.duration} min</span>
            </div>

            <div className='flex justify-between border-b border-gray-800 px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>CALORIES</span>
              <span className='text-white'>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className='flex justify-between px-4 py-3 text-xs'>
              <span className='font-semibold text-gray-400'>RATING</span>
              <span className='text-white'>{exercise.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className='mt-5'>
            <h2 className='text-sm font-black uppercase text-white'>
              Instructions
            </h2>

            <ol className='mt-3 space-y-3'>
              {exercise.instructions.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className='flex gap-3 text-xs leading-5 text-gray-400'
                  >
                    <span className='font-bold text-[#c2f800]'>
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Buttons */}
          <CTAButtons workout={exercise} />
        </div>
      </section>
    </Container>
  )
}

export default ExerciseDetailsPage
