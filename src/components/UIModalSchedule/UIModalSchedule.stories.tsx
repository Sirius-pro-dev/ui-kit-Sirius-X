import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIModalSchedule from './UIModalSchedule';

export default {
  title: 'ReactComponentLibrary/UIModalSchedule',
  component: UIModalSchedule,
} as ComponentMeta<typeof UIModalSchedule>;

const Template: ComponentStory<typeof UIModalSchedule> = (args) => (
  <UIModalSchedule {...args} />
);

export const UIModalScheduleInstance = Template.bind({});
const data = {
    "lessonKey": "0",
    "dataDay": {
        "date": "20",
        "day": "ПН",
        "lessons": [
            {
                "time": "09:00-10:30",
                "name": "Алгоритмы",
                "classType": "Лекция",
                "placeActivity": "ГМЦ",
                "teacher": "Денис Сергеевич Степанов",
                "classRoom": "004",
                "group": {
                    "_id": "654a77c484b69067b242ed02",
                    "name": "K025-1",
                    "major": "Информационные технологии и программирование",
                    "course": 2,
                    "studyForm": "Очная",
                    "educationLevel": "СПО",
                    "users": [
                        "652a549bf151b9c8da2cfe6d"
                    ],
                    "__v": 0
                }
            },
            {
                "time": "10:45-12:15",
                "name": "Базы данных",
                "classType": "Семинар",
                "placeActivity": "ГМЦ",
                "teacher": "Денис Сергеевич Степанов",
                "classRoom": "213",
                "group": {
                    "_id": "654a77c484b69067b242ed02",
                    "name": "K025-1",
                    "major": "Информационные технологии и программирование",
                    "course": 2,
                    "studyForm": "Очная",
                    "educationLevel": "СПО",
                    "users": [
                        "652a549bf151b9c8da2cfe6d"
                    ],
                    "__v": 0
                }
            },
            {
                "time": "15:00-16:30",
                "name": "Технология разработки программного обеспечения",
                "classType": "Экзамен",
                "placeActivity": "ГМЦ",
                "teacher": "Денис Сергеевич Степанов",
                "classRoom": "К_7",
                "group": {
                    "_id": "654a77c484b69067b242ed02",
                    "name": "K025-1",
                    "major": "Информационные технологии и программирование",
                    "course": 2,
                    "studyForm": "Очная",
                    "educationLevel": "СПО",
                    "users": [
                        "652a549bf151b9c8da2cfe6d"
                    ],
                    "__v": 0
                }
            }
        ]
    },
    "time": "09:00-10:30",
    "name": "Алгоритмы",
    "classType": "Лекция",
    "placeActivity": "ГМЦ",
    "teacher": "Денис Сергеевич Степанов",
    "classRoom": "004",
    "group": {
        "_id": "654a77c484b69067b242ed02",
        "name": "K025-1",
        "major": "Информационные технологии и программирование",
        "course": 2,
        "studyForm": "Очная",
        "educationLevel": "СПО",
        "users": [
            "652a549bf151b9c8da2cfe6d"
        ],
        "__v": 0
    }
}
UIModalScheduleInstance.args = {
    title: 'Информация о событии',
    data: data,
    isOpen: true,
    onClose: () => false
};
