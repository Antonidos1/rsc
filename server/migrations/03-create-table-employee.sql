CREATE TABLE "employee" (
	"id" serial NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"surname" VARCHAR(255) NOT NULL,
	"position" serial NOT NULL,
	CONSTRAINT "employee_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);