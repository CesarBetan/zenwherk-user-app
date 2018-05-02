import React, { Component } from 'react';
import './PlaceSchedulesForm.css';
import {apiUrl} from "../../../Constants";
import FullWidthButton from '../../FullWidthButton';
import SectionTitle from "../../SectionTitle/SectionTitle";
import axios from "axios";
import { hours, minutes } from './PlaceScheduleFormData';

class PlaceSchedulesForm extends Component {
    constructor(props) {
        super(props);
        this.state = { scheduleElements: [], errorMessage: '', endpoint: apiUrl+"place_schedule", hours: hours,
            minutes: minutes, hourMonday: "00", minuteMonday: "00", totalDays: 0,
            monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false,
            hourTuesday: "00", minuteTuesday: "00", hourWednesday: "00", minuteWednesday: "00",
            hourThursday: "00", minuteThursday: "00", hourFriday: "00", minuteFriday: "00",
            hourSaturday: "00", minuteSaturday: "00", hourSunday: "00", minuteSunday: "00",
            hourMonday1: "00", minuteMonday1: "00",
            hourTuesday1: "00", minuteTuesday1: "00", hourWednesday1: "00", minuteWednesday1: "00",
            hourThursday1: "00", minuteThursday1: "00", hourFriday1: "00", minuteFriday1: "00",
            hourSaturday1: "00", minuteSaturday1: "00", hourSunday1: "00", minuteSunday1: "00"
        };
        this.submittedSchedulesCount = 0;
    }

    componentWillMount() {
        console.log('Place uuid: ' + this.props.placeUuid);
    }

    countSubmittedSchedules() {
        this.submittedSchedulesCount = this.submittedSchedulesCount + 1;
        if(this.submittedSchedulesCount >= this.state.totalDays) {
            this.props.changeStage();
        }
    }

    handleSubmit(event) {
        let userUuid = JSON.parse(localStorage.getItem('user')).uuid;
        const config = {
            headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
        };
        if(this.state.monday){
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            console.log(this.state.endpoint);
            axios.post(this.state.endpoint, {
                day: 1,
                openTime: "1970-01-01 " + this.state.hourMonday + ":" + this.state.minuteMonday,
                closeTime: "1970-01-01 " + this.state.hourMonday1 + ":" + this.state.minuteMonday1,
                place: {
                    uuid: this.props.placeUuid
                },
                user: {
                    uuid: userUuid
                }
              }, config
            ).then(res => {
                console.log(res);
                this.countSubmittedSchedules();
            }).catch(err => {
                console.log(err);
                this.countSubmittedSchedules();
            });
        }
        if(this.state.tuesday){
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 2,
                  openTime: "1970-01-01 " + this.state.hourTuesday + ":" + this.state.minuteTuesday,
                  closeTime: "1970-01-01 " + this.state.hourTuesday1 + ":" + this.state.minuteTuesday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
        if(this.state.wednesday){
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 3,
                  openTime: "1970-01-01 " + this.state.hourWednesday + ":" + this.state.minuteWednesday,
                  closeTime: "1970-01-01 " + this.state.hourWednesday1 + ":" + this.state.minuteWednesday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
        if(this.state.thursday) {
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 4,
                  openTime: "1970-01-01 " + this.state.hourThursday + ":" + this.state.minuteThursday,
                  closeTime: "1970-01-01 " + this.state.hourThursday1 + ":" + this.state.minuteThursday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
        if(this.state.friday) {
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 5,
                  openTime: "1970-01-01 " + this.state.hourFriday + ":" + this.state.minuteFriday,
                  closeTime: "1970-01-01 " + this.state.hourThursday1 + ":" + this.state.minuteFriday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
        if(this.state.saturday) {
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 6,
                  openTime: "1970-01-01 " + this.state.hourSaturday + ":" + this.state.minuteSaturday,
                  closeTime: "1970-01-01 " + this.state.hourSaturday1 + ":" + this.state.minuteSaturday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
        if(this.state.sunday) {
            let num = this.state.totalDays;
            this.setState({totalDays : num+1});
            axios.post(this.state.endpoint, {
                  day: 7,
                  openTime: "1970-01-01 " + this.state.hourSunday + ":" + this.state.minuteSunday,
                  closeTime: "1970-01-01 " + this.state.hourSunday1 + ":" + this.state.minuteSunday1,
                  place: {
                      uuid: this.props.placeUuid
                  },
                  user: {
                      uuid: userUuid
                  }
              }, config
            ).then(() => {
                this.countSubmittedSchedules();
            }).catch(() => {
                this.countSubmittedSchedules();
            });
        }
    }

    handleSkip() {
        this.props.changeStage();
    }
    handleRadioChange(event) {
        const target = event.target;
        let res = target.value;
        let day = target.name;
        let last = false;
        switch (day){
            case "monday":
                last = this.state.monday;
                if(res === "on"){
                    this.setState({monday: true});
                    if(last === true){
                        this.setState({monday: false});
                    }
                }
                break;
            case "tuesday":
                last = this.state.tuesday;
                if(res === "on"){
                    this.setState({tuesday: true});
                    if(last === true){
                        this.setState({tuesday: false});
                    }
                }
                break;
            case "wednesday":
                last = this.state.wednesday;
                if(res === "on"){
                    this.setState({wednesday: true});
                    if(last === true){
                        this.setState({wednesday: false});
                    }
                }
                break;
            case "thursday":
                last = this.state.thursday;
                if(res === "on"){
                    this.setState({thursday: true});
                    if(last === true){
                        this.setState({thursday: false});
                    }
                }
                break;
            case "friday":
                last = this.state.friday;
                if(res === "on"){
                    this.setState({friday: true});
                    if(last === true){
                        this.setState({friday: false});
                    }
                }
                break;
            case "saturday":
                last = this.state.saturday;
                if(res === "on"){
                    this.setState({saturday: true});
                    if(last === true){
                        this.setState({saturday: false});
                    }
                }
                break;
            case "sunday":
                last = this.state.sunday;
                if(res === "on"){
                    this.setState({sunday: true});
                    if(last === true){
                        this.setState({sunday: false});
                    }
                }
                break;
            default:
        }
    }

    closePlaceFormPreError(event) {
        document.getElementById("place-form-pre-error").style.display = "none";
    }

    render() {
        const { title } = this.props;
        const createHour = (item, key) =>
          <option
            key={key}
            value={item.value}
          >
              {item.title}
          </option>;
        return (
          <div className="place-form-stages">
              <div className="isa_error" id="place-form-pre-error">
                  {this.state.errorMessage}
                  <a onClick={this.closePlaceFormPreError.bind(this)}>X</a>
              </div>
              <SectionTitle title={title} />
              <form className="form-style-user form-place-schedule" onSubmit={this.handleSubmit.bind(this)}>
                  <ul className="PraxisNext-Bold">
                      <div className="isa_success" id="place-form-success">
                          {this.state.successMessage}
                          <a onClick={this.closePlaceFormSuccess}>X</a>
                      </div>
                      <div className="isa_error" id="place-form-pre-error">
                          {this.state.errorMessage}
                          <a onClick={this.closePlaceFormPreError}>X</a>
                      </div>
                      <div className="isa_error" id="place-form-error">
                          {this.state.errorServer}
                          <a onClick={this.closePlaceFormError}>X</a>
                      </div>
                      <li>
                          <label htmlFor="monday">Lunes</label>
                          <input type="checkbox" name="monday"
                                 checked={this.state.monday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.monday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourMonday}
                                          onChange={event => this.setState({ hourMonday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteMonday}
                                          onChange={event => this.setState({ minuteMonday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                      value={this.state.hourMonday1}
                                      onChange={event => this.setState({ hourMonday1: event.target.value })}
                                      className="PraxisNext-Bold">
                                        {this.state.hours.map(createHour)}
                                    </select>
                                        :
                                        <select
                                          value={this.state.minuteMonday1}
                                          onChange={event => this.setState({ minuteMonday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="tuesday">Martes</label>
                          <input type="checkbox" name="tuesday"
                                 checked={this.state.tuesday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.tuesday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourTuesday}
                                          onChange={event => this.setState({ hourTuesday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteTuesday}
                                          onChange={event => this.setState({ minuteTuesday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                      value={this.state.hourTuesday1}
                                      onChange={event => this.setState({ hourTuesday1: event.target.value })}
                                      className="PraxisNext-Bold">
                                        {this.state.hours.map(createHour)}
                                    </select>
                                        :
                                        <select
                                          value={this.state.minuteTuesday1}
                                          onChange={event => this.setState({ minuteTuesday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="wednesday">Miércoles</label>
                          <input type="checkbox" name="wednesday"
                                 checked={this.state.wednesday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.wednesday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourWednesday}
                                          onChange={event => this.setState({ hourWednesday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteWednesday}
                                          onChange={event => this.setState({ minuteWednesday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                          value={this.state.hourWednesday1}
                                          onChange={event => this.setState({ hourWednesday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteWednesday1}
                                          onChange={event => this.setState({ minuteWednesday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="thursday">Jueves</label>
                          <input type="checkbox" name="thursday"
                                 checked={this.state.thursday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.thursday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourThursday}
                                          onChange={event => this.setState({ hourThursday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteThursday}
                                          onChange={event => this.setState({ minuteThursday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                      value={this.state.hourThursday1}
                                      onChange={event => this.setState({ hourThursday1: event.target.value })}
                                      className="PraxisNext-Bold">
                                        {this.state.hours.map(createHour)}
                                    </select>
                                        :
                                        <select
                                          value={this.state.minuteThursday1}
                                          onChange={event => this.setState({ minuteThursday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="friday">Viernes</label>
                          <input type="checkbox" name="friday"
                                 checked={this.state.friday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.friday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourFriday}
                                          onChange={event => this.setState({ hourFriday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteFriday}
                                          onChange={event => this.setState({ minuteFriday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                      value={this.state.hourFriday1}
                                      onChange={event => this.setState({ hourFriday1: event.target.value })}
                                      className="PraxisNext-Bold">
                                        {this.state.hours.map(createHour)}
                                    </select>
                                        :
                                        <select
                                          value={this.state.minuteFriday1}
                                          onChange={event => this.setState({ minuteFriday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="saturday">Sábado</label>
                          <input type="checkbox" name="saturday"
                                 checked={this.state.saturday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.saturday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre:<select
                                          value={this.state.hourSaturday}
                                          onChange={event => this.setState({ hourSaturday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteSaturday}
                                          onChange={event => this.setState({ minuteSaturday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                          value={this.state.hourSaturday1}
                                          onChange={event => this.setState({ hourSaturday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteSaturday1}
                                          onChange={event => this.setState({ minuteSaturday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <li>
                          <label htmlFor="sunday">Domingo</label>
                          <input type="checkbox" name="sunday"
                                 checked={this.state.sunday}
                                 onChange={this.handleRadioChange.bind(this)}
                          />Abierto
                          {
                              this.state.sunday ?
                                <div>
                                    <div className="hour-selections">
                                        Abre: <select
                                          value={this.state.hourSunday}
                                          onChange={event => this.setState({ hourSunday: event.target.value })}
                                          className="PraxisNext-Bold place-select-open">
                                            {this.state.hours.map(createHour)}
                                        </select>
                                        :
                                        <select
                                          value={this.state.minuteSunday}
                                          onChange={event => this.setState({ minuteSunday: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                    <div className="hour-selections">
                                        Cierra: <select
                                      value={this.state.hourSunday1}
                                      onChange={event => this.setState({ hourSunday1: event.target.value })}
                                      className="PraxisNext-Bold">
                                        {this.state.hours.map(createHour)}
                                    </select>
                                        :
                                        <select
                                          value={this.state.minuteSunday1}
                                          onChange={event => this.setState({ minuteSunday1: event.target.value })}
                                          className="PraxisNext-Bold">
                                            {this.state.minutes.map(createHour)}
                                        </select> hrs
                                    </div>
                                </div>
                                :
                                ""
                          }
                      </li>
                      <div className="place-features-form-button">
                          <FullWidthButton title="Guardar y Continuar" onClick={this.handleSubmit.bind(this)} />
                      </div>
                      <div>
                          <FullWidthButton title="Saltar" onClick={this.handleSkip.bind(this)}/>
                      </div>
                  </ul>
              </form>
          </div>
        );
    }
}

export default PlaceSchedulesForm;
