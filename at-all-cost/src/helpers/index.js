import titelize from 'titleize';
import * as moment from 'moment';

export const toUpperCase = value => value ? titelize(value) : '';

export const pretifyDate = date => moment(date).format('MMM Do YY');

export const shortDate = date => moment(date).format('MMMM Do, YYYY');