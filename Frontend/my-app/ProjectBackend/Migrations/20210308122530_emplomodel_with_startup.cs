using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class emplomodel_with_startup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Occupation1",
                table: "Emplos",
                newName: "Occupation01");

            migrationBuilder.RenameColumn(
                name: "ImageName1",
                table: "Emplos",
                newName: "ImageName01");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Occupation01",
                table: "Emplos",
                newName: "Occupation1");

            migrationBuilder.RenameColumn(
                name: "ImageName01",
                table: "Emplos",
                newName: "ImageName1");
        }
    }
}
