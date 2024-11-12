import { Calendar } from "@/components/ui/calendar"
import React from "react";
import { useDate } from "@/contexts/DateProvider";

const CalendarCom = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const { selectedDate, setSelectedDate } = useDate();

    return (
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
    );
}

export default CalendarCom;
