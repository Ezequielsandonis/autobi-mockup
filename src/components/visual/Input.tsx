import React from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { InputSwitch } from "primereact/inputswitch";
import { InputNumber } from "primereact/inputnumber";
import { AutoComplete } from "primereact/autocomplete";
import { Checkbox } from "primereact/checkbox";
import { Chips } from "primereact/chips";
import { Password } from "primereact/password";
import { locale, addLocale } from "primereact/api";



addLocale("es", {
  firstDayOfWeek: 1,
  dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
  monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  today: "Hoy",
  clear: "Limpiar",
  chooseDate: "Elegir fecha"
});

locale("es");

//TODO
const LIGHT_RED_CULTIVAPRO = "#f44336";
const LIGHT_GREEN_CULTIVAPRO = "#4caf50";

const Input = ({
  value,
  label,
  options,
  isMask,
  isBig,
  isAutocomplete,
  suggestions,
  optionGroupLabel,
  completeMethod,
  field,
  isEditing,
  isTextarea,
  isDropdown,
  isCalendar,
  isMultipleSelect,
  isSwitch,
  isCheckbox,
  isDefaultValue,
  onChange,
  separator,
  style,
  optionValue,
  optionLabel,
  disabled,
  filter,
  showClear,
  filterBy,
  virtualScrollerOptions,
  className,
  placeholder,
  IdDisabled,
  keyfilter,
  maxLength,
  minLength,
  minDate,
  required,
  helperText,
  ref,
  isNumber,
  inputFontsize,
  display,
  isThin,
  hasError,
  mask,
  isChip,
  isAutocompleteChip,
  fontSize,
  alignItems,
  onKeyDown,
  mode,
  currency,
  onValueChange,
  maxDate,
  optionDisabled,
  isPassword,
  icon,
  ...other
}: any) => {
  return (
    <div style={style} className={isTextarea ? "flex flex-col my-4 w-full h-full max-h-full sm:my-0 sm:mb-5" : "flex flex-col my-2 w-full sm:relative sm:my-0"}>
      {!isCheckbox && (
        <span className="text-sm w-fit mb-1 sm:mb-0 sm:text-xs">
          {label}
          {required && <span className="text-light-red-cultivapro text-base font-bold">*</span>}
        </span>
      )}
      <div className="flex items-center relative w-full">
        {icon && (
          <span className="p-inputgroup-addon">
            <i className={`pi ${icon}`}></i>
          </span>
        )}

        {!isEditing ? (
          isSwitch ? (
            <span className={isBig ? "text-lg font-bold text-light-blue-cultivapro sm:text-base" : "text-base font-medium text-light-blue-cultivapro sm:text-sm"}>
              {value ? (
                <i style={{ fontSize: "1.5em", color: LIGHT_GREEN_CULTIVAPRO }} className={"pi pi-check"}></i>
              ) : (
                <i style={{ fontSize: "1.5em", color: LIGHT_RED_CULTIVAPRO }} className={"pi pi-times"}></i>
              )}
            </span>
          ) : (
            <span className={isBig ? "text-lg font-bold text-light-blue-cultivapro sm:text-base" : "text-base font-medium text-light-blue-cultivapro sm:text-sm"} style={{ fontSize }}>
              {!value || value === "null" ? "Sin datos" : value}{" "}
            </span>
          )
        ) : isPassword ? (
          <Password value={value} onChange={onChange} className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs" autoResize {...other} />
        ) : isTextarea ? (
          <InputTextarea
            autoComplete="off"
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
            autoResize
            className="h-full w-full text-base resize-none overflow-y-auto placeholder:text-black/35"
            {...other}
          />
        ) : isDropdown ? (
          <Dropdown
            autoComplete="off"
            filter={filter}
            showClear={showClear}
            filterBy={filterBy}
            virtualScrollerOptions={virtualScrollerOptions}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            placeholder={placeholder}
            disabled={disabled || options?.length < 1}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: inputFontsize,
            }}
            optionValue={optionValue}
            optionLabel={optionLabel}
            onChange={onChange}
            optionGroupLabel={optionGroupLabel}
            value={value}
            {...other}
            optionDisabled={(e) => {
              if (!optionDisabled) {
                return e.Id === 0;
              }
            }}
            options={isDefaultValue ? [{ [optionValue]: 0, [optionLabel]: "Selecciona una opción" }, ...options] : options}
          />
        ) : isCalendar ? (
          <Calendar
            autoComplete="off"
            dateFormat="dd/mm/yy"
            placeholder={placeholder}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            minDate={minDate}
            maxDate={maxDate}
            locale="es"
            firstDayOfWeek={1}
            value={value}
            disabled={disabled}
            onChange={onChange}
            next2Label={null}
            prev2Label={null}
            // Personalización de la barra superior (mes/año)
            calendarClassName="bg-yellow-500 text-white font-semibold p-2 rounded-lg shadow-md"
            {...other}
          />
        ) : isChip ? (
          <Chips
            autoComplete="off"
            style={{
              ...other?.style,
              height: "min-content",
            }}
            placeholder={placeholder}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            value={value}
            disabled={disabled}
            onChange={onChange}
            separator={separator}
            {...other}
          />
        ) : isMultipleSelect ? (
          <MultiSelect
            autoComplete="off"
            {...other}
            placeholder={placeholder}
            display={display}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            filter={filter}
            filterBy={filterBy}
            options={options}
            onChange={onChange}
            disabled={disabled}
            optionGroupLabel={optionGroupLabel}
            value={value}
            optionLabel={optionLabel}
            optionValue={optionValue}
            selectedItemsLabel={`{0} items seleccionados`}
          // optionDisabled={optionDisabled}
          />
        ) : isSwitch ? (
          <InputSwitch {...other} autoComplete="off" checked={value} ref={ref} onChange={onChange} disabled={disabled} />
        ) : isMask ? (
          <InputMask
            autoComplete="off"
            {...other}
            style={{
              ...other?.style,
              fontSize: inputFontsize,
              border: hasError ? `1px solid ${LIGHT_RED_CULTIVAPRO}` : "",
            }}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            mask={mask}
            autoClear={false}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
          ></InputMask>
        ) : isNumber ? (
          <InputNumber
            {...other}
            mode={mode}
            currency={currency}
            autoComplete="off"
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            onKeyDown={onKeyDown}
            onValueChange={onValueChange}
          />
        ) : isAutocomplete ? (
          <AutoComplete
            {...other}
            autoComplete="off"
            suggestions={suggestions}
            completeMethod={completeMethod}
            field={field}
            optionGroupLabel={optionGroupLabel}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            delay={1000}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
        ) : isAutocompleteChip ? (
          <AutoComplete
            {...other}
            autoComplete="off"
            style={{
              ...other?.style,
              height: "min-content",
            }}
            multiple
            suggestions={suggestions}
            completeMethod={completeMethod}
            field={field}
            optionGroupLabel={optionGroupLabel}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            delay={1000}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
          />
        ) : isCheckbox ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox {...other} autoComplete="off" onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} />
            <span className="text-sm w-fit mb-1 sm:mb-0 sm:text-xs">
              {label}
              {required && <span className="text-light-red-cultivapro text-base font-bold">*</span>}
            </span>
          </div>
        ) : (
          <InputText
            autoComplete="off"
            style={{
              ...other?.style,
              fontSize: inputFontsize,
              border: hasError ? `1px solid ${LIGHT_RED_CULTIVAPRO}` : "",
            }}
            {...other}
            keyfilter={keyfilter}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            className="flex-1 h-10 my-0 text-sm w-full pl-2 placeholder:text-black/25 sm:text-xs"
            ref={ref}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
            minLength={minLength}
          />
        )}
        <span className="text-sm w-fit mb-1 text-black/45 sm:mb-0 sm:text-xs" style={{ color: hasError ? LIGHT_RED_CULTIVAPRO : "" }}>
          {helperText}
        </span>
      </div>
    </div>
  );
};

export default Input;
