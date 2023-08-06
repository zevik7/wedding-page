import React from 'react'
import Calendar from '../Calendar'
import Section from '../Section'

const WeddingSection = () => {
  return (
    <Section title={"Lễ cưới"} subTitle={"Đánh dấu nơi chúng tôi bắt đầu hành trình mới."}>
      <div className="grid grid-cols-4 gap-4">
        <Calendar />

      </div>
    </Section>
  )
}

export default WeddingSection