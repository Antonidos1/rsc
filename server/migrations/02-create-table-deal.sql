CREATE TABLE "deal" (
	"id" serial,
	"car_id" integer NOT NULL,
	"price" integer NOT NULL,
	CONSTRAINT "deal_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);