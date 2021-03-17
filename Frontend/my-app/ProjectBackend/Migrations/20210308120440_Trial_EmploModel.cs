using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class Trial_EmploModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Emplos",
                columns: table => new
                {
                    EmploID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmploName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Occupation1 = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ImageName1 = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emplos", x => x.EmploID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emplos");
        }
    }
}
