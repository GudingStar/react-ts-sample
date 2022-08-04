import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from 'reactstrap';//@ts-ignore
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import EventData from './EventData';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss';
import {ColorVariationType ,NewEditEventType} from './style';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);
const initUpdate : NewEditEventType = {
  title: "",
  allDay: false,
  start: new Date(1,1,1),
  end: new Date(1,1,1),
  color: ""
}

const CalendarApp = () => {
  const [calevents, setCalEvents] = useState(EventData);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const [slot, setSlot] = useState<NewEditEventType>(initUpdate);
  const [color, setColor] = useState('default');


  const [update, setUpdate] = useState<NewEditEventType>(initUpdate)


  const ColorVariation : ColorVariationType[]  = [
    {
      id: 1,
      eColor: '#1a97f5',
      value: 'primary',
    },
    {
      id: 2,
      eColor: '#00ab55',
      value: 'success',
    },
    {
      id: 3,
      eColor: '#fc4b6c',
      value: 'danger',
    },
    {
      id: 4,
      eColor: '#1e4db7',
      value: 'info',
    },
    {
      id: 5,
      eColor: '#fdd43f',
      value: 'warning',
    },
  ];
  const addNewEventAlert = (slotInfo : NewEditEventType) => {
    setOpen(true);
    setSlot(slotInfo);
  };
  const editEvent = (event : any) => {
    setOpen(true);
    const newEditEvent : any = calevents.find((elem) => elem.title === event.title);
    setColor(event.color);
    setTitle(newEditEvent.title);
    setColor(newEditEvent.color);
    setUpdate(event);
  };
  const updateEvent = (e : any) => {
    e.preventDefault();

    setCalEvents(
      calevents.map((elem) => {
        if (elem.title === update.title) {
          return { ...elem, title, color };
        }
        return elem;
      }),
    );
    setOpen(false);
    setTitle('');
    setColor('');
    setUpdate(initUpdate);
  };
  const inputChangeHandler = (e: any) => setTitle(e.target.value);

  const selectinputChangeHandler = (id : string) => setColor(id);

  const submitHandler = (e : any) => {
    e.preventDefault();

    const newEvents : any  = calevents;
    newEvents.push({
      title,
      start: slot.start,
      end: slot.end,
      color,
    });
    setOpen(false);
    e.target.reset();

    setCalEvents(newEvents);
    setTitle('');
  };
  const deleteHandler = (event : NewEditEventType) => {
    const updatecalEvents = calevents.filter((ind) => ind.title !== event.title);
    setCalEvents(updatecalEvents);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setUpdate(initUpdate);
  };

  const eventColors = (event : NewEditEventType) => {
    if (event.color) {
      return { className: `event-${event.color}` };
    }
    return { className: `event-default` };
  };

  return (
    <>
      <Card>
        <CardBody>
          <Calendar
            selectable
            events={calevents}
            defaultView="month"
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            localizer={localizer}
            style={{ height: 'calc(100vh - 350px' }}
            onSelectEvent={(event : any) => editEvent(event)}
            onSelectSlot={(slotInfo : NewEditEventType) => addNewEventAlert(slotInfo)}
            eventPropGetter={(event : NewEditEventType) => eventColors(event)}
          />
          <Modal isOpen={open}>
            <ModalHeader toggle={handleClose}>{update ? 'Update Event' : 'Add Event'}</ModalHeader>
            <Form onSubmit={update ? updateEvent : submitHandler}>
              <ModalBody>
                <h6>Event Title</h6>
                <Input
                  id="Event Title"
                  placeholder="Enter Event Title"
                  value={title}
                  onChange={inputChangeHandler}
                />
                <br />
                <h6>Select Event Color</h6>
                <div className="button-group">
                  {ColorVariation.map((colorbg) => (
                    <Button
                      color={colorbg.value}
                      key={colorbg.eColor}
                      size="sm"
                      onClick={() => selectinputChangeHandler(colorbg.value)}
                    >
                      {colorbg.value === color ? (
                        <i className="bi bi-check" />
                      ) : (
                        <i className="bi bi-circle" />
                      )}
                    </Button>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                {update ? (
                  <Button
                    type="submit"
                    color="danger"
                    outline
                    onClick={() => deleteHandler(update)}
                  >
                    Delete
                  </Button>
                ) : (
                  ''
                )}
                <Button type="submit" color="success" disabled={!title}>
                  {update ? 'Update' : 'Add'}
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </CardBody>
      </Card>
    </>
  );
};

export default CalendarApp;
