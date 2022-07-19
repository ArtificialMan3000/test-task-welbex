CREATE TABLE "task_table" (
  "id" bigint generated always as identity,
  "date" date NOT NULL,
  "name" varchar(40) NOT NULL,
  "amount" integer NOT NULL,
  "distance" integer NOT NULL
);

ALTER TABLE "task_table" ADD PRIMARY KEY ("id");