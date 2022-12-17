using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Pingu.Config.Migrations
{
    public partial class ApuntesModificated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Texto",
                table: "Apuntes",
                newName: "Post");

            migrationBuilder.AddColumn<DateTime>(
                name: "Fecha",
                table: "Apuntes",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "avilitado",
                table: "Apuntes",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "puntuacion",
                table: "Apuntes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "visitas",
                table: "Apuntes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fecha",
                table: "Apuntes");

            migrationBuilder.DropColumn(
                name: "avilitado",
                table: "Apuntes");

            migrationBuilder.DropColumn(
                name: "puntuacion",
                table: "Apuntes");

            migrationBuilder.DropColumn(
                name: "visitas",
                table: "Apuntes");

            migrationBuilder.RenameColumn(
                name: "Post",
                table: "Apuntes",
                newName: "Texto");
        }
    }
}
