CREATE TABLE "country" (
	"id" serial NOT NULL,
	"country" VARCHAR(255) NOT NULL,
	CONSTRAINT "country_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);