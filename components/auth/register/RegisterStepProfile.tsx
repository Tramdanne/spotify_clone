"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { RegisterGenderOption, RegisterMonthOption } from "@/types/auth-register";

type RegisterStepProfileProps = {
  name: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  errors: {
    name?: string;
    birthDay?: string;
    birthMonth?: string;
    birthYear?: string;
    gender?: string;
  };
  nameLabel: string;
  namePlaceholder: string;
  nameHint: string;
  birthLabel: string;
  birthHint: string;
  dayPlaceholder: string;
  monthPlaceholder: string;
  yearPlaceholder: string;
  genderLabel: string;
  genderHint: string;
  monthOptions: readonly RegisterMonthOption[];
  genderOptions: readonly RegisterGenderOption[];
  nextLabel: string;
  onNameChange: (value: string) => void;
  onBirthDayChange: (value: string) => void;
  onBirthMonthChange: (value: string) => void;
  onBirthYearChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onNext: () => void;
};

export function RegisterStepProfile({
  name,
  birthDay,
  birthMonth,
  birthYear,
  gender,
  errors,
  nameLabel,
  namePlaceholder,
  nameHint,
  birthLabel,
  birthHint,
  dayPlaceholder,
  monthPlaceholder,
  yearPlaceholder,
  genderLabel,
  genderHint,
  monthOptions,
  genderOptions,
  nextLabel,
  onNameChange,
  onBirthDayChange,
  onBirthMonthChange,
  onBirthYearChange,
  onGenderChange,
  onNext,
}: RegisterStepProfileProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="register-name">{nameLabel}</Label>
        <p className="text-xs text-zinc-400 md:text-sm">{nameHint}</p>
        <Input
          id="register-name"
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder={namePlaceholder}
          className="h-12 rounded-xl border-white/15 bg-white/6 px-4 text-sm text-white placeholder:text-zinc-500"
        />
        {errors.name ? <p className="text-sm text-red-400">{errors.name}</p> : null}
      </div>

      <div className="space-y-2">
        <Label>{birthLabel}</Label>
        <p className="text-xs text-zinc-400 md:text-sm">{birthHint}</p>
        <div className="grid grid-cols-[88px_minmax(0,1fr)_110px] gap-3">
          <Input
            type="number"
            inputMode="numeric"
            value={birthDay}
            onChange={(event) => onBirthDayChange(event.target.value)}
            placeholder={dayPlaceholder}
            className="no-spinner h-12 rounded-xl border-white/15 bg-white/6 px-4 text-sm text-white placeholder:text-zinc-500"
          />
          <Select value={birthMonth} onValueChange={onBirthMonthChange}>
            <SelectTrigger className="h-12 rounded-xl border-white/15 bg-white/6 px-4 text-sm text-white">
              <SelectValue placeholder={monthPlaceholder} />
            </SelectTrigger>
            <SelectContent className="bg-[#181818] text-white">
              {monthOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            inputMode="numeric"
            value={birthYear}
            onChange={(event) => onBirthYearChange(event.target.value)}
            placeholder={yearPlaceholder}
            className="no-spinner h-12 rounded-xl border-white/15 bg-white/6 px-4 text-sm text-white placeholder:text-zinc-500"
          />
        </div>
        {errors.birthDay || errors.birthMonth || errors.birthYear ? (
          <p className="text-sm text-red-400">
            {errors.birthDay ?? errors.birthMonth ?? errors.birthYear}
          </p>
        ) : null}
      </div>

      <div className="space-y-3">
        <Label>{genderLabel}</Label>
        <p className="text-xs text-zinc-400 md:text-sm">{genderHint}</p>
        <RadioGroup className="flex flex-wrap gap-x-5 gap-y-3">
          {genderOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 text-xs font-semibold text-white md:text-sm"
            >
              <RadioGroupItem
                name="gender"
                value={option.value}
                checked={gender === option.value}
                onChange={(event) => onGenderChange(event.currentTarget.value)}
              />
              {option.label}
            </label>
          ))}
        </RadioGroup>
        {errors.gender ? <p className="text-sm text-red-400">{errors.gender}</p> : null}
      </div>

      <Button
        type="button"
        onClick={onNext}
        className="h-11 w-full rounded-full bg-[#1ed760] text-sm font-bold text-black hover:bg-[#30e36f]"
      >
        {nextLabel}
      </Button>
    </section>
  );
}
