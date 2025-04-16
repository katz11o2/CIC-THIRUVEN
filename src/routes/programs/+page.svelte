<script>
    import { onMount } from 'svelte';
 
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import interactionPlugin from '@fullcalendar/interaction';

    // Initialize the current date and generate the calendar URL
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth(); // Current month
    let currentYear = currentDate.getFullYear(); // Current year

    let currentCalendarSrc = generateCalendarUrl(currentYear, currentMonth);
    let selectedDate = null;
    let eventList = [];
    let selectedEvent = '';

    // Placeholder events for the current month
    const events = {
        '2025-04-05': 'Workshop on AI and Machine Learning',
        '2025-04-10': 'Awareness Program on Design Thinking',
        '2025-04-15': 'Talk Series on Building a Successful MVP',
        '2025-04-20': 'Networking Session for Students',
        '2025-04-25': 'Startup Guidance Workshop'
    };

    // Function to generate the calendar URL based on year and month
    function generateCalendarUrl(year, month) {
        return `https://calendar.google.com/calendar/embed?src=thiruvenkat.er%40gmail.com&ctz=UTC&mode=MONTH&showTabs=0&showCalendars=0&showTz=0&startDate=${year}-${String(month + 1).padStart(2, '0')}-01`;
    }

    // Function to fetch event titles for the current month
    function getEventTitles() {
        const currentMonthEvents = [];
        for (let date in events) {
            if (date.startsWith(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`)) {
                currentMonthEvents.push({ date, title: events[date] });
            }
        }
        eventList = currentMonthEvents;
    }

    // Fetch event titles on component mount
    onMount(() => {
        getEventTitles();
    });

    // Function to update the selected date and display the event title for that date
    function handleDateClick(date) {
        selectedDate = date;
        selectedEvent = events[date] || 'No event scheduled for this day.';
    }
</script>

<div class="main-container">
    <div class="header">
        <h1>Events, Awareness Programs, and Workshops</h1>
        <div class="flex items-center gap-3 mb-4">
            <!-- Two dots -->
            <span class="w-3 h-3 bg-blue-900 rounded-full"></span>
            <span class="w-3 h-3 bg-blue-900 rounded-full"></span>
            <!-- Line -->
            <div class="w-[100px] h-1 bg-blue-900 ml-2"></div>
        </div>
    </div>

    <div class="calendar-and-details-container">
        <!-- Calendar iframe -->
        <div class="calendar-container">
            <iframe
                src={currentCalendarSrc}
                class="styled-calendar"
                frameborder="0"
                scrolling="no">
            </iframe>
        </div>

        <!-- Event details box -->
        <div class="event-details-container">
            <div class="event-title">
                <strong>Important Dates of Upcoming Month:</strong>
                <ul class="event-list">
                    {#each eventList as event}
                        <li>
                            <button class="event-item" on:click={() => handleDateClick(event.date)}>
                                {event.title}
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Display selected event details -->
            {#if selectedDate}
                <div class="selected-event">
                    <strong>Selected Event on {selectedDate}:</strong>
                    <p>{selectedEvent}</p>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>


    /* Main container for overall layout */
    .main-container {
        width: 100%;
        padding: 30px;
        font-family: 'Poppins', sans-serif;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95vh;


        
   
    }
    

    /* Header styling */
    .header h1 {
        font-size: 2.2rem;
        color: #333;
        margin-bottom: 7px;
        text-align: center;
        font-weight: 600;
        font-family:poppins, Geneva, Tahoma, sans-serif;
    }

    /* Flexbox container for calendar and event details */
    .calendar-and-details-container {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        max-width: 1000px;
        width: 100%;
        border: #1d0e4b;
        flex-wrap: wrap;
      
      
    }

    /* Calendar container */
    .calendar-container {
        flex: 1;
        min-width: 350px;
        max-width: 600px;
        background: #fff;
        box-shadow: 0px 8px 16px rgba(36, 3, 60, 0.1);
        border-radius: 10px;
        overflow: hidden;
        height: 350px;
    }

    /* Calendar iframe */
    .styled-calendar {
        width: 100%;
        height: 350px;
        border: none;
        border-radius: 10px;
    }

    /* Event details box */
    .event-details-container {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        height: 350px;
        padding: 25px;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .event-details-container:hover {
        transform: translateY(-5px);
        box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
    }

    /* Event title */
    .event-title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
    }

    /* Event list styling */
    .event-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    /* Individual event item */
    .event-item {
        background-color: #4a90e2;
        color: white;
        font-size: 0.7rem;
        margin: 5px 0;
        padding: 6px;
        border-radius: 8px;
        text-align: left;
        width: 100%;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .event-item:hover {
        background-color: #357ab7;
        transform: scale(1.05);
    }

    /* Selected event details */
    .selected-event {
        margin-top: 17px;
        padding: 15px;
        background-color: #ecd3d3;
        border-radius: 10px;
    }

    .selected-event strong {
        font-size: 1rem;
        color: #000A30;
    }

    .selected-event p {
        font-size: 1rem;
        color: #000A30;
    }

    /* Responsive design adjustments */
    @media (max-width: 768px) {
        .calendar-and-details-container {
            flex-direction: column;
            align-items: center;
        }

        .calendar-container, .event-details-container {
            width: 100%;
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .header h1 {
            font-size: 1.8rem;
        }

        .event-item {
            font-size: 0.9rem;
        }

        .selected-event p {
            font-size: 0.9rem;
        }
    }
</style>
