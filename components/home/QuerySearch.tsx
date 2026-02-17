"use client";

import { Field, FieldError } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import IconSearch from "../ui/icon-search";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function QuerySearch() {
  const [error, setError] = useState<null | string>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSubmitForm(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("word") as string;

    const params = new URLSearchParams(searchParams);
    if (query.trim()) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  function handleOnChangeInput(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const query = e.target.value;
    if (query.trim()) {
      setError(null);
    } else {
      setError("Whoops, can't be empty...");
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Field>
        <InputGroup>
          <InputGroupInput
            onChange={handleOnChangeInput}
            aria-invalid={error ? "true" : "false"}
            className="text-preset-5-mobile font-bold"
            id="word"
            name="word"
            placeholder="Search for any word..."
          />
          <InputGroupAddon align="inline-end">
            <button type="submit">
              <IconSearch />
            </button>
          </InputGroupAddon>
        </InputGroup>
        {error && <FieldError>{error}</FieldError>}
      </Field>
    </form>
  );
}

export default QuerySearch;
