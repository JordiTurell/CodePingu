using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Pingu.Config.Migrations
{
    public partial class Apuntes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Apuntes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    IdLenguajes = table.Column<Guid>(type: "uuid", nullable: false),
                    Titulo = table.Column<string>(type: "text", nullable: false),
                    Texto = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apuntes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Apuntes_Lenguajes_IdLenguajes",
                        column: x => x.IdLenguajes,
                        principalTable: "Lenguajes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Apuntes_IdLenguajes",
                table: "Apuntes",
                column: "IdLenguajes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Apuntes");
        }
    }
}
