CREATE TABLE "model" (
	"id" serial NOT NULL,
	"mark" serial NOT NULL,
	"model" VARCHAR(255) NOT NULL,
	CONSTRAINT "model_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);