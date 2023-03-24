import styles from './page.module.css'
import { DevelopingTheFuture } from '../sections/DevelopingTheFuture/DevelopingTheFuture'
import { WhatWeDo } from '@/sections/WhatWeDo/WhatWeDo'
import { DevelopmentsLabs } from '@/sections/DevelopmentsLabs/DevelopmentsLabs'
import { Industries } from '@/sections/Industries/Industries'
import { IndustriesList } from '@/sections/IndustriesList/IndustriesList'
import { OurClients } from '@/sections/OurClients/OurClients'
import { Cases } from '@/sections/Cases/Cases'
import { MoreApps } from '@/sections/MoreApps/MoreApps'

export default function Home() {
  return (
    <main className={styles.main}>
      <DevelopingTheFuture />
      <WhatWeDo />
      <DevelopmentsLabs />
      <Industries />
      <IndustriesList />
      <OurClients />
      <Cases />
      <MoreApps />
    </main>
  )
}
