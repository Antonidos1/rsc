CREATE TABLE "deal" (
	"Id" integer NOT NULL,
	"car_id" integer NOT NULL,
	"employee_id" integer NOT NULL,
	"price" integer NOT NULL,
	CONSTRAINT "deal_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);